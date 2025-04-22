import React, { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Radix UI components
const Dialog = dynamic(() => import('@radix-ui/react-dialog').then(mod => mod.Root), { ssr: false });
const DialogTrigger = dynamic(() => import('@radix-ui/react-dialog').then(mod => mod.Trigger), { ssr: false });
const DialogContent = dynamic(() => import('@radix-ui/react-dialog').then(mod => mod.Content), { ssr: false });
const DialogTitle = dynamic(() => import('@radix-ui/react-dialog').then(mod => mod.Title), { ssr: false });
const DialogDescription = dynamic(() => import('@radix-ui/react-dialog').then(mod => mod.Description), { ssr: false });
const DialogClose = dynamic(() => import('@radix-ui/react-dialog').then(mod => mod.Close), { ssr: false });

// Create a UI components file that lazy loads Radix UI components
const RadixUI = {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
};

export default RadixUI;
