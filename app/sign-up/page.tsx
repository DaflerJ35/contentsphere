import { SignUpForm } from "@/components/auth/sign-up-form"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <AnimatedGradientBackground />
      <div className="z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-2">
            ContentSphere
          </h1>
          <p className="text-gray-400">Transform content for every platform</p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}
