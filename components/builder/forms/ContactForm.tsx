import { Contact } from '@/types/resume';

interface ContactFormProps {
  data: Contact;
  updateData: (data: Partial<Contact>) => void;
}

export function ContactForm({ data, updateData }: ContactFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
        <input
          id="full-name"
          type="text"
          value={data.name}
          onChange={(e) => updateData({ name: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
        <input
          id="phone"
          type="text"
          value={data.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">Location</label>
        <input
          id="location"
          type="text"
          value={data.location}
          onChange={(e) => updateData({ location: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div>
        <label htmlFor="linkedin" className="block text-sm font-medium text-slate-700 mb-1">LinkedIn (Optional)</label>
        <input
          id="linkedin"
          type="text"
          value={data.linkedin || ''}
          onChange={(e) => updateData({ linkedin: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Website (Optional)</label>
        <input
          id="website"
          type="text"
          value={data.website || ''}
          onChange={(e) => updateData({ website: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
    </div>
  );
}
