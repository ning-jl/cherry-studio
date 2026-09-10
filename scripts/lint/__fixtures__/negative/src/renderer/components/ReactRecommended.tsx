/* oxlint-disable no-unused-vars */
import React, {
  Children,
  captureOwnerStack,
  createContext,
  createRef,
  forwardRef,
  lazy,
  useContext,
  useEffect
} from 'react'
import ReactDOM, { findDOMNode, flushSync, hydrate, render, useFormState } from 'react-dom'

const caseContextName = createContext(null)
const CaseGoodContext = createContext(null)
const caseImplicitKey = { key: 'implicit' }
const caseSpread = { title: 'spread' }

export const caseNoForwardRef = forwardRef((props: { value: string }) => <span>{props.value}</span>)

const CaseAnonymousDefaults = function () {
  return null
}

CaseAnonymousDefaults.defaultProps = {}

export function CaseRecommended({ children, items }: { children: React.ReactNode; items: string[] }) {
  const caseNoCreateRef = createRef<HTMLDivElement>()
  const caseNoUseContext = useContext(CaseGoodContext)
  const CaseNestedLazy = lazy(() => import('./NestedComponent'))
  const caseNestedLazyFromCallback = items.map(() => lazy(() => import('./NestedComponent')))
  const caseChildrenMapReference = Children.map
  const caseCaptureOwnerStack = captureOwnerStack()
  const caseFlushSync = flushSync(() => undefined)
  const caseHydrate = hydrate(<div />, document.body)
  const caseRenderReturnValue = ReactDOM.render(<div />, document.body)
  const caseNoRender = render(<div />, document.body)
  const caseUseFormState = useFormState(async () => null, null)
  findDOMNode(null)
  const caseCloneElement = React.cloneElement(<span />)

  useEffect(() => {
    const interval = setInterval(() => undefined, 100)
    return () => {
      const interval = 0
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <caseNamespace:item />
      <button>button</button>
      <iframe />
      <iframe sandbox="allow-scripts allow-same-origin" />
      <a href="javascript:void(0)" target="_blank">
        link
      </a>
      <a href="https://example.com" target="_blank">
        external
      </a>
      <div dangerouslySetInnerHTML={{ __html: 'unsafe' }}>child</div>
      <img>child</img>
      <div>// comment text</div>
      <CaseGoodContext.Provider value={null}>{children}</CaseGoodContext.Provider>
      <caseContextName.Provider value={null}>{children}</caseContextName.Provider>
      <span {...caseSpread} key="after-spread" />
      <span {...caseImplicitKey} />
      {[<span key="duplicate" />, <span key="duplicate" />]}
      {items.map((item) => (
        <span>{item}</span>
      ))}
      {Children.count(children)}
      {Children.forEach(children, () => undefined)}
      {Children.map(children, (child) => child)}
      {Children.only(children)}
      <CaseNestedLazy />
      {caseNoCreateRef.current}
      {caseNoUseContext}
      {caseCaptureOwnerStack}
      {String(caseFlushSync)}
      {String(caseHydrate)}
      {String(caseRenderReturnValue)}
      {String(caseNoRender)}
      {String(caseUseFormState)}
      {caseCloneElement}
      {caseNestedLazyFromCallback.length}
      {String(caseChildrenMapReference)}
    </>
  )
}

CaseRecommended.defaultProps = { children: null, items: [] }
CaseRecommended.propTypes = {}
