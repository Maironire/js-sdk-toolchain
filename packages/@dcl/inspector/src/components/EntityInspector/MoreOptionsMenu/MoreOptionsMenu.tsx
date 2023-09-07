import React, { useCallback, useState } from 'react'
import { VscEllipsis as EllipsisIcon } from 'react-icons/vsc'
import Button from '../../Button'
import { useOutsideClick } from '../../../hooks/useOutsideClick'

import './MoreOptionsMenu.css'

export const MoreOptionsMenu = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [showMoreOptions, setShowMoreOptions] = useState<boolean>(false)

  const handleShowMoreOptions = useCallback(
    (_e: React.MouseEvent<HTMLButtonElement>) => {
      setShowMoreOptions(!showMoreOptions)
    },
    [showMoreOptions, setShowMoreOptions]
  )

  const handleClosePanel = useCallback(() => {
    setShowMoreOptions(false)
  }, [setShowMoreOptions])

  const ref = useOutsideClick(handleClosePanel)

  return (
    <div className="MoreOptionsMenu" ref={ref}>
      <Button className="MoreOptionsButton" onClick={handleShowMoreOptions}>
        <EllipsisIcon size={16} />
      </Button>
      {showMoreOptions && <div className="MoreOptionsContent">{children}</div>}
    </div>
  )
}

export default React.memo(MoreOptionsMenu)
