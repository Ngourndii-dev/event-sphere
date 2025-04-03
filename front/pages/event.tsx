import EventList from '@/components/EventList';
import React from 'react';
import "../styles/globals.css"
export default function EventPage() {
  return (
    <main className="min-h-screen bg-gray-100">
        <EventList />
    </main>
  );
}