import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-primary-foreground/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary-foreground/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-primary-foreground/20 rounded-full animate-spin" style={{ animationDuration: '60s' }} />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-16 text-primary-foreground">
          <Link to="/" className="flex items-center gap-3 mb-12">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm border border-primary-foreground/20">
              <Scale className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <span className="font-serif text-3xl font-semibold tracking-wide">
                Nyaya AI
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
                Legal Intelligence
              </p>
            </div>
          </Link>
          
          <h1 className="font-serif text-4xl xl:text-5xl font-semibold leading-tight mb-6">
            Justice,{" "}
            <span className="text-gold">Explained</span>.
            <br />
            Law,{" "}
            <span className="text-gold">Simplified</span>.
          </h1>
          
          <p className="text-lg text-primary-foreground/80 max-w-md leading-relaxed font-sans">
            Access India's most comprehensive legal AI platform. Get instant answers grounded in Indian law.
          </p>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold">50K+</span>
              <span className="text-sm text-primary-foreground/70 font-sans">Legal Queries</span>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold">98%</span>
              <span className="text-sm text-primary-foreground/70 font-sans">Accuracy Rate</span>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold">24/7</span>
              <span className="text-sm text-primary-foreground/70 font-sans">Available</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-emboss">
              <Scale className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-serif text-2xl font-semibold text-primary">
              Nyaya AI
            </span>
          </div>
          
          {/* Toggle Switch */}
          <div className="flex justify-center mb-8">
            <div className="relative flex p-1 bg-secondary border border-border rounded-full">
              <motion.div
                className="absolute top-1 bottom-1 bg-primary rounded-full"
                initial={false}
                animate={{
                  left: isSignUp ? "50%" : "4px",
                  right: isSignUp ? "4px" : "50%",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
              <button
                onClick={() => setIsSignUp(false)}
                className={`relative z-10 px-8 py-2.5 text-sm font-medium rounded-full transition-colors font-sans ${
                  !isSignUp ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`relative z-10 px-8 py-2.5 text-sm font-medium rounded-full transition-colors font-sans ${
                  isSignUp ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
          
          {/* Form */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isSignUp ? "signup" : "signin"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-elevated">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {isSignUp ? "Create Account" : "Welcome Back"}
                </h2>
                <p className="text-muted-foreground text-sm mb-6 font-sans">
                  {isSignUp
                    ? "Join thousands using Nyaya AI for legal insights"
                    : "Sign in to continue your legal research"}
                </p>
                
                <form className="space-y-4">
                  {isSignUp && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground font-sans">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          className="pl-10 h-12 bg-background border-border font-sans"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-sans">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10 h-12 bg-background border-border font-sans"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-sans">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10 h-12 bg-background border-border font-sans"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {!isSignUp && (
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-muted-foreground font-sans">Remember me</span>
                      </label>
                      <a href="#" className="text-primary hover:underline font-sans">
                        Forgot password?
                      </a>
                    </div>
                  )}
                  
                  <Button className="w-full h-12 mt-6 font-sans group" size="lg">
                    {isSignUp ? "Create Account" : "Sign In"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground font-sans">
                      Or continue with
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-12 font-sans">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="h-12 font-sans">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </Button>
                </div>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-6 font-sans">
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setIsSignUp(false)}
                      className="text-primary hover:underline font-medium"
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <button
                      onClick={() => setIsSignUp(true)}
                      className="text-primary hover:underline font-medium"
                    >
                      Create one
                    </button>
                  </>
                )}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Auth;
