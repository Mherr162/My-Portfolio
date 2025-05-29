import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    console.log('Received contact form submission:', { name, email });

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing environment variables:', {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPassword: !!process.env.EMAIL_PASSWORD,
        emailUserLength: process.env.EMAIL_USER?.length,
        emailPasswordLength: process.env.EMAIL_PASSWORD?.length
      });
      throw new Error('Email configuration is missing. Please check environment variables.');
    }

    console.log('Email configuration check:', {
      emailUser: process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_PASSWORD,
      passwordLength: process.env.EMAIL_PASSWORD?.length
    });

    console.log('Creating email transporter...');
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true, // Enable debug logging
    });

    // Verify transporter configuration
    console.log('Verifying transporter configuration...');
    try {
      await transporter.verify();
      console.log('Transporter verification successful');
    } catch (verifyError: unknown) {
      console.error('Transporter verification failed:', verifyError);
      let errorMessage = 'Unknown error';
      if (verifyError instanceof Error) {
        errorMessage = verifyError.message;
      } else if (typeof verifyError === 'string') {
        errorMessage = verifyError;
      }
      throw new Error(`Failed to verify email configuration: ${errorMessage}`);
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    console.log('Attempting to send email...');
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    // Return more detailed error information
    let details = 'Unknown error occurred';
    let stack: string | undefined = undefined;
    if (error instanceof Error) {
      details = error.message;
      stack = error.stack;
    } else if (typeof error === 'string') {
      details = error;
    }
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details,
        stack
      },
      { status: 500 }
    );
  }
} 