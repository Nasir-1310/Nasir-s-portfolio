import { motion } from 'motion/react';
import { useState } from 'react';
import {
  LayoutDashboard,
  FolderOpen,
  Settings,
  Upload,
  Plus,
  Edit,
  Trash2,
  X,
  Image as ImageIcon,
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'settings'>('projects');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [dragActive, setDragActive] = useState(false);

  // Mock projects data
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'AI-Powered Chatbot',
      description: 'Intelligent conversational AI using NLP',
      image: 'https://images.unsplash.com/photo-1761223976145-a85ffe11fc57',
      technologies: ['Python', 'TensorFlow', 'React'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store',
      image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };

  const sidebarItems = [
    { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border p-6 space-y-8"
        >
          <div>
            <h2 className="text-xl font-bold mb-2">Admin Panel</h2>
            <p className="text-sm text-muted-foreground">Manage your portfolio</p>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === item.id
                      ? 'bg-foreground text-background'
                      : 'hover:bg-accent text-muted-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header */}
            <div className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  {activeTab === 'projects' && 'Manage Projects'}
                  {activeTab === 'overview' && 'Dashboard Overview'}
                  {activeTab === 'settings' && 'Settings'}
                </h1>
                <p className="text-muted-foreground">
                  {activeTab === 'projects' && 'Add, edit, or remove your projects'}
                  {activeTab === 'overview' && 'View your portfolio statistics'}
                  {activeTab === 'settings' && 'Configure your preferences'}
                </p>
              </div>

              {activeTab === 'projects' && (
                <button
                  onClick={() => {
                    setEditingProject(null);
                    setIsModalOpen(true);
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Plus className="w-5 h-5" />
                  Add Project
                </button>
              )}
            </div>

            {/* Projects Grid */}
            {activeTab === 'projects' && (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Project Image */}
                    <div className="relative h-40 bg-accent">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Project Info */}
                    <div className="p-6 space-y-4">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-lg bg-accent text-accent-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => {
                            setEditingProject(project);
                            setIsModalOpen(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-accent transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setProjects(projects.filter((p) => p.id !== project.id));
                          }}
                          className="px-4 py-2 rounded-xl border border-destructive text-destructive hover:bg-destructive/10 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Projects', value: projects.length, change: '+12%' },
                  { label: 'Total Views', value: '1,234', change: '+23%' },
                  { label: 'Messages', value: '45', change: '+8%' },
                  { label: 'Downloads', value: '890', change: '+15%' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-green-600">{stat.change}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </main>
      </div>

      {/* Add/Edit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background rounded-3xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl hover:bg-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm mb-2">Project Title</label>
                  <input
                    type="text"
                    defaultValue={editingProject?.title}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter project title"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm mb-2">Description</label>
                  <textarea
                    defaultValue={editingProject?.description}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Describe your project"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm mb-2">Project Image</label>
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
                      dragActive
                        ? 'border-foreground bg-accent'
                        : 'border-border hover:border-muted-foreground'
                    }`}
                  >
                    <ImageIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop your image here, or
                    </p>
                    <label className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-xl cursor-pointer hover:bg-accent/80 transition-colors">
                      <Upload className="w-4 h-4" />
                      Browse Files
                      <input type="file" accept="image/*" className="hidden" />
                    </label>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <label className="block text-sm mb-2">Technologies (comma-separated)</label>
                  <input
                    type="text"
                    defaultValue={editingProject?.technologies.join(', ')}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="React, TypeScript, Node.js"
                  />
                </div>

                {/* URLs */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">GitHub URL</label>
                    <input
                      type="url"
                      defaultValue={editingProject?.githubUrl}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="https://github.com/..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Live Demo URL</label>
                    <input
                      type="url"
                      defaultValue={editingProject?.liveUrl}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 rounded-xl border border-border hover:bg-accent transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity"
                  >
                    {editingProject ? 'Update Project' : 'Create Project'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
