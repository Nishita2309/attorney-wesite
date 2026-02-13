import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface ConsultationModalProps {
  onClose: () => void;
}

export default function ConsultationModal({ onClose }: ConsultationModalProps) {
  const { t } = useLanguage();

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl leading-none"
        >
          ✕
        </button>

        <h3 id="modal-title" className="text-2xl font-heading mb-6 text-center">
          {t('hero.cta')}
        </h3>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: wire up form submission
            onClose();
          }}
        >
          <div>
            <label htmlFor="consult-name" className="text-sm font-medium">
              {t('form.name')}
            </label>
            <input
              id="consult-name"
              type="text"
              required
              className="w-full mt-1 p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="consult-email" className="text-sm font-medium">
              {t('form.email')}
            </label>
            <input
              id="consult-email"
              type="email"
              required
              className="w-full mt-1 p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="consult-phone" className="text-sm font-medium">
              {t('form.phone')}
            </label>
            <input
              id="consult-phone"
              type="tel"
              className="w-full mt-1 p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="consult-message" className="text-sm font-medium">
              {t('form.message')}
            </label>
            <textarea
              id="consult-message"
              rows={4}
              required
              className="w-full mt-1 p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary/90 mt-2"
          >
            {t('form.submit')}
          </Button>
        </form>
      </div>
    </div>,
    document.body
  );
}