import {CursorPosition} from '../slices/user-position'
import {GitSha} from '../slices/git-sha'

// server

export const Footer = () => (
  <footer className='pb3 pt5 ph3 mt6 mb3 flex app_footer tween baseline w-100'>
    <div className='f-inline baseline flex'>
      <small className='f7 db tl ttu pr3 font-mono gray'>
        © 2023 <b className='gravel'>CDC®</b>
      </small>
      <CursorPosition />
    </div>
    <small>
      <GitSha />
    </small>
  </footer>
)
