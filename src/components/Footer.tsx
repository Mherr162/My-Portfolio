import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-16 bg-primary/3 dark:bg-primary/15">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <Link href="/" className="text-xl font-bold mb-6 md:mb-0">
            MH
          </Link>

          <div className="flex gap-6">
            <Link href="https://github.com/Mherr162" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.162 8.839 21.489C9.339 21.579 9.525 21.272 9.525 21.008C9.525 20.768 9.516 20.046 9.512 19.192C6.726 19.79 6.139 17.819 6.139 17.819C5.685 16.654 5.028 16.347 5.028 16.347C4.132 15.701 5.097 15.713 5.097 15.713C6.094 15.785 6.628 16.774 6.628 16.774C7.527 18.361 8.972 17.868 9.544 17.611C9.636 16.935 9.889 16.444 10.17 16.163C7.97 15.878 5.65 15.028 5.65 11.23C5.65 10.104 6.05 9.186 6.648 8.466C6.545 8.214 6.194 7.207 6.746 5.909C6.746 5.909 7.596 5.642 9.502 6.855C10.296 6.631 11.152 6.519 12 6.515C12.848 6.519 13.704 6.631 14.5 6.855C16.404 5.642 17.252 5.909 17.252 5.909C17.805 7.207 17.454 8.214 17.352 8.466C17.95 9.186 18.348 10.104 18.348 11.23C18.348 15.038 16.023 15.875 13.817 16.155C14.172 16.5 14.492 17.183 14.492 18.232C14.492 19.724 14.478 20.673 14.478 21.008C14.478 21.275 14.663 21.585 15.171 21.487C19.138 20.156 22 16.416 22 12C22 6.477 17.523 2 12 2Z" fill="white" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/michelherrera/" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="white" />
              </svg>
            </Link>
            <Link href="mailto:michelhm22@icloud.com">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Michel Herrera. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              Made with ❤️ by Michel Herrera
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
