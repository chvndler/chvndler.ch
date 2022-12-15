/** @format */

import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {isMobile as _isMobile} from 'react-device-detect'
import {styled} from 'stitches.config'

import {CoolButton} from '@/components/ds'
import {Icxn} from '@/components/icons/icxn'
import {event} from '@/lib/ga'

const StyledButton = styled(CoolButton, {
 fontFamily: '$inter',
 fontSize: 15,
 fontWeight: 600,
 letterSpacing: '-0.02em'
})

export const DownloadButton = ({
 variant,
 className,
 tabIndex
}: {
 variant?: 'mobile'
 className?: string
 tabIndex?: number
 link?: string
}) => {
 const [isMobile, setIsMobile] = useState<boolean>()

 useEffect(() => {
  setIsMobile(_isMobile)
 }, [])

 const shouldOnlyTweet = useMemo(() => {
  return isMobile || variant === 'mobile'
 }, [isMobile, variant])

 const handleDownload = useCallback(() => {
  event({
   category: 'Download',
   action: 'Download',
   label: 'Download',
   value: '1'
  })
  const encoded = {
   text: encodeURIComponent('Chan is cool !')
  }
  window.open(`https://twitter.com/intent/tweet?text=${encoded.text}`, '_blank')
 }, [])

 return (
  <StyledButton
   onClick={handleDownload}
   className={className}
   tabIndex={tabIndex}
   css={{
    color: '$sage9',
    ...(variant === 'mobile'
     ? {
        textAlign: 'left',
        position: 'relative'
       }
     : {height: '100%'})
   }}
   icon={<Icxn variant='Twitter' />}>
   {shouldOnlyTweet ? 'TWEET IT' : <>Tweet @ Me </>}{' '}
  </StyledButton>
 )
}
