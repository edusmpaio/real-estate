import { Button } from '@/components/Button';

export default function ProposalForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name" className="sr-only">
        Digite seu nome completo
      </label>
      <input
        id="name"
        type="text"
        placeholder="Seu nome completo"
        className="w-full bg-gray-100 px-4 py-3 border border-gray-200 mb-4 text-sm placeholder:text-gray-500"
      />

      <label htmlFor="name" className="sr-only">
        Digite seu número de telefone
      </label>
      <input
        id="name"
        type="text"
        placeholder="Seu número de telefone"
        className="w-full bg-gray-100 px-4 py-3 border border-gray-200 mb-4 text-sm placeholder:text-gray-500"
      />

      <textarea
        id="name"
        placeholder="Digite sua mensagem..."
        className="resize-none w-full h-40 bg-gray-100 px-4 py-3 border border-gray-200 text-sm mb-8 placeholder:text-gray-500"
      />

      <Button className="w-full">Fazer proposta</Button>
    </form>
  );
}
