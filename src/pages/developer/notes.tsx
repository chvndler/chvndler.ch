/** @format */

import {NotesPageDisplay} from '@/components/displays/notes'
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
