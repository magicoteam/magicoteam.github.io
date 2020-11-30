import * as React from 'react';
import { Page, Grid, Card, Table, StatsCard, Text } from 'tabler-react';
import SiteWrapper from './SiteWrapper.react';

// DATA
import bodyItems from './data/Body.items.json';
import perfisItems from './data/Perfis.items.json';

const Dashboard = () => {
  const renderPerfisItems = (perfisItems) => {
    return perfisItems.items.map(({ key, item }) => {
      const [perfis] = item;
      return {
        key,
        item: [
          {
            content: perfis.join(', '),
          },
        ],
      };
    });
  };

  const renderBodyItems = (bodyItems) => {
    return bodyItems.items.map(({ key, item }) => {
      const [id, date, saldo, obtidos, perdidos] = item;
      return {
        key,
        item: [
          {
            content: (
              <Text RootComponent="span" muted>
                {id}
              </Text>
            ),
          },
          {
            content: (
              <a href="/" className="text-inherit">
                {date}
              </a>
            ),
          },
          {
            content: saldo,
          },
          {
            content: obtidos.join(', '),
          },
          {
            content: perdidos.join(', '),
          },
        ],
      };
    });
  };

  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
        <Grid.Row cards={true}>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={5}
              total="1893"
              label="Seguidores"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={-2} total="46" label="Seguindo" />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={2.45}
              total="11,85%"
              label="Engajamento"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={-57.8}
              total="218,18"
              label="Média de Curtidas"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={-0.23}
              total="5,05"
              label="Média de Comentários"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={-15}
              total="563 dias"
              label="Dias pra chegar em X seguidores"
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col width={12}>
            <Card title="Seguidores Obtidos/Perdidos">
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: 'No.', className: 'w-1' },
                  { content: 'Data' },
                  { content: 'Saldo' },
                  { content: 'Obtidos' },
                  { content: 'Perdidos' },
                  { content: null },
                  { content: null },
                ]}
                bodyItems={renderBodyItems(bodyItems)}
              />
            </Card>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col width={12}>
            <Card>
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: 'Perfis que você seguem, mas não te seguem' },
                ]}
                bodyItems={renderPerfisItems(perfisItems)}
              />
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
};

export default Dashboard;
