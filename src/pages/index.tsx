import { PostList } from "@/components/PostList";
import { SEO } from "@/SEO";

interface IPosts {
  slug: string;
  title: string;
  description: string;
}

export default function Home({ posts }) {
  return (
    <>
      <SEO title="Início" />

      <PostList
        title="CSS Grid"
        background="background.jpg"
        description="Você sempre teve dificuldade em trabalhar com o display grid?
              Trouxemos aqui algumas dicas para você conseguir aprender mais
              sobre e usar ele da maneira correta!"
      />
      <PostList
        title="Flex Box"
        background="background3.jpg"
        description="Você sempre teve dificuldade em trabalhar com o display flex?
              Trouxemos aqui algumas dicas para você conseguir aprender mais
              sobre e usar ele da maneira correta!"
      />
      <PostList
        title="HTML"
        background="background4.png"
        description="Curso de HTML básico para você que está iniciando na área da programação."
      />
    </>
  );
}
