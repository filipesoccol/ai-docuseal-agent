import { DocuSealProvider } from './contexts/DocuSealContext';

export const metadata = {
  title: 'DocuSeal AI Document filler Agent',
  description: 'DocuSeal AI Document filler Agent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DocuSealProvider>
          {children}
        </DocuSealProvider>
      </body>
    </html>
  )
}
