const {normalizeUrl,getURLsFromHTML}=require('./crawl.js')
const {test, expect}=require('@jest/globals')

test('normalizeUrl strip protocol',()=>{
    const input ='https://blog.boot.dev/path'
    const actual =normalizeUrl(input)
    const expected='blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
test('normalizeUrl strip trailing slash',()=>{
    const input ='https://blog.boot.dev/'
    const actual =normalizeUrl(input)
    const expected='blog.boot.dev'
    expect(actual).toEqual(expected)
})
test('normalizeUrl Capitals',()=>{
    const input ='https://BLOG.boot.dev/'
    const actual =normalizeUrl(input)
    const expected='blog.boot.dev'
    expect(actual).toEqual(expected)
})
test('normalizeUrlProtocol wise',()=>{
    const input ='http://blog.boot.dev/'
    const actual =normalizeUrl(input)
    const expected='blog.boot.dev'
    expect(actual).toEqual(expected)
})
test('getURLsFromHTML absolute',()=>{
    const inputHTMLBody =`<html> <body><a href="https://blog.boot.dev">Boot .dev blog</a></body></html>`
    const inputBaseUrl="https://blog.boot.dev"
    const actual =getURLsFromHTML(inputHTMLBody,inputBaseUrl)
    const expected=["https://blog.boot.dev/"]
    expect(actual).toEqual(expected)
})
test('getURLsFromHTML relative',()=>{
    const inputHTMLBody =`<html> <body><a href="/path/">Boot .dev blog</a></body></html>`
    const inputBaseUrl="https://blog.boot.dev"
    const actual =getURLsFromHTML(inputHTMLBody,inputBaseUrl)
    const expected=["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
})
test('getURLsFromHTML both asolute & relative',()=>{
    const inputHTMLBody =`<html> <body><a href="/path/">Boot .dev blog</a><a href="https://blog.boot.dev">Boot .dev blog</a></body></html>`
    const inputBaseUrl="https://blog.boot.dev"
    const actual =getURLsFromHTML(inputHTMLBody,inputBaseUrl)
    const expected=["https://blog.boot.dev/path/","https://blog.boot.dev/"]
    expect(actual).toEqual(expected)
})
test('getURLsFromHTML invalid',()=>{
    const inputHTMLBody =`<html> <body><a href="invalid">Boot .dev blog</a></body></html>`
    const inputBaseUrl="https://blog.boot.dev"
    const actual =getURLsFromHTML(inputHTMLBody,inputBaseUrl)
    const expected=[]
    expect(actual).toEqual(expected)
})