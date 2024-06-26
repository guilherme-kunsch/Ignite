import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post({ author, publishedAt, content }) {
  
  const publishedDateFormatted = format(publishedAt, "'Dia' dd 'de' LLLL 'de' yyyy", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const comments = [
    1,
    2,
    3,
    4
  ]

  function handleCreateNewComment() {
    
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
          {content.map(line => {
            if(line.type === 'paragraph') {
              return <p>{line.content}</p>
            } else if(line.type === 'link') {
              return <p><a href="#">{line.content}</a></p>
            }
          })}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <button type="submit">Comentar</button>
      </form>
      <div>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>
    </article>
  );
}
