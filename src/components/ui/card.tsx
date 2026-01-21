import * as React from "react"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------
   CARD ROOT
------------------------------------------------------- */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        `
        bg-card text-card-foreground
        rounded-xl border
        shadow-sm
        transition-shadow
        hover:shadow-md
        `,
        className
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------
   CARD HEADER
------------------------------------------------------- */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        `
        flex flex-col gap-1.5
        px-4 pt-4
        `,
        className
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------
   CARD TITLE
------------------------------------------------------- */
function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-sm font-semibold leading-tight tracking-tight",
        className
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------
   CARD DESCRIPTION
------------------------------------------------------- */
function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn(
        "text-xs text-muted-foreground leading-snug",
        className
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------
   CARD CONTENT
------------------------------------------------------- */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-4 py-3",
        className
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------
   CARD FOOTER
------------------------------------------------------- */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        `
        px-4 pb-4
        flex items-center gap-2
        `,
        className
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------
   CARD ACTION (TOP-RIGHT SLOT)
------------------------------------------------------- */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("ml-auto", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
}
