import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/guilherme-kunsch.png",
        name: "Guilherme Kunsch",
        role: "Analista de TI",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("21-03-2024 17:50"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/guilherme-kunsch",
        name: "Gabrielly Oliveira",
        role: "Farmacêutica",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("21-03-2024 17:50"),
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  );
}
