/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as SearchImport } from './routes/search'
import { Route as CollectionsImport } from './routes/collections'
import { Route as AccountImport } from './routes/account'
import { Route as IndexImport } from './routes/index'
import { Route as InfoInfoIdImport } from './routes/info/$infoId'
import { Route as CategoryCategoryIdImport } from './routes/category/$categoryId'

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const CollectionsRoute = CollectionsImport.update({
  id: '/collections',
  path: '/collections',
  getParentRoute: () => rootRoute,
} as any)

const AccountRoute = AccountImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const InfoInfoIdRoute = InfoInfoIdImport.update({
  id: '/info/$infoId',
  path: '/info/$infoId',
  getParentRoute: () => rootRoute,
} as any)

const CategoryCategoryIdRoute = CategoryCategoryIdImport.update({
  id: '/category/$categoryId',
  path: '/category/$categoryId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/account': {
      id: '/account'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof AccountImport
      parentRoute: typeof rootRoute
    }
    '/collections': {
      id: '/collections'
      path: '/collections'
      fullPath: '/collections'
      preLoaderRoute: typeof CollectionsImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/category/$categoryId': {
      id: '/category/$categoryId'
      path: '/category/$categoryId'
      fullPath: '/category/$categoryId'
      preLoaderRoute: typeof CategoryCategoryIdImport
      parentRoute: typeof rootRoute
    }
    '/info/$infoId': {
      id: '/info/$infoId'
      path: '/info/$infoId'
      fullPath: '/info/$infoId'
      preLoaderRoute: typeof InfoInfoIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/account': typeof AccountRoute
  '/collections': typeof CollectionsRoute
  '/search': typeof SearchRoute
  '/settings': typeof SettingsRoute
  '/category/$categoryId': typeof CategoryCategoryIdRoute
  '/info/$infoId': typeof InfoInfoIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/account': typeof AccountRoute
  '/collections': typeof CollectionsRoute
  '/search': typeof SearchRoute
  '/settings': typeof SettingsRoute
  '/category/$categoryId': typeof CategoryCategoryIdRoute
  '/info/$infoId': typeof InfoInfoIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/account': typeof AccountRoute
  '/collections': typeof CollectionsRoute
  '/search': typeof SearchRoute
  '/settings': typeof SettingsRoute
  '/category/$categoryId': typeof CategoryCategoryIdRoute
  '/info/$infoId': typeof InfoInfoIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/account'
    | '/collections'
    | '/search'
    | '/settings'
    | '/category/$categoryId'
    | '/info/$infoId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/account'
    | '/collections'
    | '/search'
    | '/settings'
    | '/category/$categoryId'
    | '/info/$infoId'
  id:
    | '__root__'
    | '/'
    | '/account'
    | '/collections'
    | '/search'
    | '/settings'
    | '/category/$categoryId'
    | '/info/$infoId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AccountRoute: typeof AccountRoute
  CollectionsRoute: typeof CollectionsRoute
  SearchRoute: typeof SearchRoute
  SettingsRoute: typeof SettingsRoute
  CategoryCategoryIdRoute: typeof CategoryCategoryIdRoute
  InfoInfoIdRoute: typeof InfoInfoIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AccountRoute: AccountRoute,
  CollectionsRoute: CollectionsRoute,
  SearchRoute: SearchRoute,
  SettingsRoute: SettingsRoute,
  CategoryCategoryIdRoute: CategoryCategoryIdRoute,
  InfoInfoIdRoute: InfoInfoIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/account",
        "/collections",
        "/search",
        "/settings",
        "/category/$categoryId",
        "/info/$infoId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/account": {
      "filePath": "account.tsx"
    },
    "/collections": {
      "filePath": "collections.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/category/$categoryId": {
      "filePath": "category/$categoryId.tsx"
    },
    "/info/$infoId": {
      "filePath": "info/$infoId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
