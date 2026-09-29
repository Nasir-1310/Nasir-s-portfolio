import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { profile } from '../data/portfolio';

export const socialLinks = [
  { icon: Github, href: profile.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: profile.socials.twitter, label: 'X (Twitter)' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
];
