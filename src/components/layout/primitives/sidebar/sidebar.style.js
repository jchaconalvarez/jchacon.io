import styled from 'styled-components'

import { VARIABLES } from '../../../../constants'

export const WithSidebar = styled.div`
  overflow: hidden;

  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: ${VARIABLES.scale.scale0 / 2 * -1}rem;
  };

  & > * > * {
    margin: ${VARIABLES.scale.scale0 / 2}rem;
    ${props => props.minWidth && `flex-basis: ${props.minWidth}rem;`}
    flex-grow: 1;
  };

  & > * > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: ${props => props.contentMinWidth && `${props.contentMinWidth}`};
  };
`
