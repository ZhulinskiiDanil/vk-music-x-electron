// Components
import { MainWrapper } from '@/processes/MainWrapper/ui/MainWrapper'
import { PlaylistHeader } from '@/widgets/PlaylistHeader/ui/PlaylistHeader'
import { PlaylistTracksList } from '@/widgets/PlaylistTracksList/ui/PlaylistTracksList'

export default function Playlist() {
  return <MainWrapper sidebar footer>
    <PlaylistHeader />
    <PlaylistTracksList />
  </MainWrapper>
}