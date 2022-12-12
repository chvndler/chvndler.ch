import {useRouter} from 'next/router'
import {useEffect} from 'react'

/*
 * Copyright (C) 2022 @chvndler
 * All Rights Reserved.
 *
 * You may use, distribute and modify this code under the
 * terms of the MIT license. You should have received a
 * copy of the MIT license with this repository.
 *
 * See https://github.com/chvndler
 */

const Index = () => {
 const router = useRouter()
 useEffect(() => {
  router.replace('/app')
 })

 return
}

export default Index
