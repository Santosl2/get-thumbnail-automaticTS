import styles from "./styles.module.scss";

interface IParams {
  title: string;
  description: string;
  background: string;
}

export function PostList({
  title,
  description,
  background = "background.jpg",
}: IParams) {
  const params = title?.replace(/[ ]/g, "+");

  return (
    <>
      <section id={styles.postWrapper}>
        <div className={styles.postBox}>
          <div className={styles.postBoxContent}>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className={styles.postBoxContentFooter}>
              <small>May 20th 2020</small>
              <a>Read more</a>
            </div>
          </div>

          <div
            className={styles.postImage}
            style={{
              backgroundImage: `url(http://localhost:3000/api/thumbnail?title=${params}&background=${background})`,
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
