import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, FolderOpen } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 pb-12 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass w-full max-w-lg rounded-[2rem] p-10 text-center sm:p-14"
      >
        <p className="text-gradient text-gradient-animated font-display text-8xl font-extrabold tracking-tighter sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
          <Link to="/projects" className="btn-glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold">
            <FolderOpen className="h-4 w-4" />
            View projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
