import { cn } from "@/lib/utils"

export function H1({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white", className)}>
      {children}
    </h1>
  )
}

export function H2({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-white", className)}>
      {children}
    </h2>
  )
}

export function P({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6 text-white/90", className)}>
      {children}
    </p>
  )
}

export function Muted({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}
