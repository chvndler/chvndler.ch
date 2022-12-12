import {NotesPageDisplay} from '@/components/displays/notes-page'
import {PageLayout} from '@/components/layout/page'

const NotesPage = () => {
 return (
  <>
   <PageLayout page_type={'RemoveFooter'}>
    <NotesPageDisplay />
   </PageLayout>
  </>
 )
}

export default NotesPage
