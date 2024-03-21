import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post(props) {
  console.log(props)
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://avatars.githubusercontent.com/u/75049024?v=4"/>
          <div className={styles.authorInfo}>
            <strong>Guilherme Kunsch</strong>
            <span>Analista de Suporte de TI</span>
          </div>
        </div>
        <time dateTime="2024-02-29">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
          <p>Fala galeraa 👋</p> 
          <p>Acabei de subir mais um projeto no meu portifa. É um
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é DoctorCare 🚀</p> 
          <p><a href="#">👉 jane.design/doctorcare</a></p> 
          <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
          </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <button type="submit">Comentar</button>
      </form>
      <div>
        <Comment />
      </div>
    </article>
  );
}
