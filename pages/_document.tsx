import React from 'react'
import NextDocument from 'next/document'

export default class Document extends NextDocument {
  static async getInitialProps (ctx: any) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <div>
          {initialProps.styles}
        </div>
      )
    }
  }
}