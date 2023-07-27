import styles from './main.module.scss'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

interface IPlaylistProps {
  playlistId: string
  title: string
  subtitle?: string
  count?: number
  imageUrl?: string
  Icon?: React.FC<React.SVGAttributes<SVGSVGElement>>
}

export function Playlist({
  playlistId,
  title,
  subtitle = "Плейлист",
  count = 0,
  imageUrl,
  Icon
}: IPlaylistProps) {
  const query = Object.fromEntries(new URLSearchParams(
    useLocation().search
  ).entries())
  const classList = clsx(styles.item, {
    [styles.active]: query?.id === playlistId
  })

  const image = Icon ? (
    <Icon
      stroke='white'
      style={{ padding: "7px" }}
      className={clsx(styles.image, styles.icon)}
    />
  ) : imageUrl ? (
    <img
      className={styles.image}
      src={imageUrl}
      alt="Playlist Image"
    />
  ) : undefined

  return <Link to={`/playlist?id=${playlistId}`}>
    <div className={classList}>
      { image }
      <div className={styles.data}>
        <p className={styles.title}>{ title }</p>
        <div className={styles.more}>
          <span>{ subtitle }</span>
          <span className={styles.circle} />
          <span className={styles.count}>{ count } треков</span>
        </div>
      </div>
    </div>
  </Link>
}