import CodeforcesClient from '../../..';

describe('contest.status module', () => {
  const publicContestId = '556';
  const privateContestId = '258529';

  it('should fetch public contest submissions successfully', async () => {
    const client = new CodeforcesClient();
    const result = await client.contest.status({ contestId: publicContestId, count: 5 });

    expect(result.status).toBe('OK');
    if (result.status === 'OK') {
      expect(result.result.length).toBe(5);
    }
  });

  it('should fetch private contest submissions successfully', async () => {
    const client = new CodeforcesClient(process.env.CF_KEY, process.env.CF_SECRET);
    const result = await client.contest.status({ contestId: privateContestId, count: 5 });

    expect(result.status).toBe('OK');
    if (result.status === 'OK') {
      expect(result.result.length).toBe(5);
    }
  });

  it('should fail to fetch a private contest submissions without credentials', async () => {
    const client = new CodeforcesClient();
    const result = await client.contest.status({ contestId: privateContestId, count: 5 });

    expect(result.status).toBe('FAILED');
  });
});
