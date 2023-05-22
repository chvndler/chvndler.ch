import {Albums} from '../../components/slices/albums'
import {PageSection} from '../../components/core'

export default function ArchiveIndex() {
  return (
    <PageSection>
      <h3 className='f3 fw4 track-n-01 gray pb4 aspekta'>
        The <span className='fw6 gravel'>archive</span>.
      </h3>

      <Albums />
    </PageSection>
  )
}
