import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Input } from "@/components/Input";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-col max-w-[36.25rem] mx-auto h-full w-full flex-1 items-center justify-center">
        <Container>
          <div>
            <span>Ingressar</span>
            <span>Nova Reunião</span>
          </div>
          <div className="flex flex-col gap-4 bg-gray-600 p-12 rounded-lg">
            <Input placeholder="Seu Nome" type="text" />
            <Input placeholder="ID da Reunião" type="text" />
            <Button title="Entrar" type="button" />
          </div>
        </Container>
      </div>
    </main>
  );
}
