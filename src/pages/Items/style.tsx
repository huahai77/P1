import styled from 'styled-components'
export const Wrapper = styled('div')`
  padding: 20px;
`

export const RadioWrapper = styled('div')`
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`

export const TableWrapper = styled('div')`
  .row-odd {
    background-color: #fafafa;
  }
`

export const CardListWrapper = styled('div')`
  /**
grid布局，比较简单，代码量少能够实现
 */

  //display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  //grid-gap: 15px;

  /**
  flex布局，需要配合媒体查询使用
   */
  display: flex;
  flex-wrap: wrap;

  .card-item {
    // 让5个卡片正好占据一行，每个卡片占据父容器的五分之一宽度，并减去间距
    flex-basis: calc(20% - 20px);
    margin: 10px;
  }

  @media screen and (max-width: 360px) {
    .card-item {
      flex-basis: calc(100% - 20px);
    }
  }

  @media screen and (min-width: 361px) and (max-width: 700px) {
    .card-item {
      flex-basis: calc(50% - 20px);
    }
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    .card-item {
      flex-basis: calc(33.33% - 20px);
    }
  }

  @media screen and (min-width: 1001px) and (max-width: 1300px) {
    .card-item {
      flex-basis: calc(25% - 20px);
    }
  }

  @media screen and (min-width: 1301px) {
    .card-item {
      flex-basis: calc(20% - 20px);
    }
  }
`
