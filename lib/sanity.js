import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '81ga09bo',
    dataset: 'production',
    apiVersion: '2022-11-25', // use current UTC date - see "specifying API version"!
    token:
      'skrlPMwoUHUmM1VfX3onSiTEm0DdEhE9mos95dloJwUsAvTBkVUbMIB4Y017TlaPKLuDhYjJALZKvEenVNsYHmvt3SIEax9QgUCuHYWOKZjcUNZcOB890cod82KYKsQNrzLXEcHFqQcULibOXeOfPjtq1CUmrWswGrGxrMuGsZeKpYsmiBJn', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
  })
  
  