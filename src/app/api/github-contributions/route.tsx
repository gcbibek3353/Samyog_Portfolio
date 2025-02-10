import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  // console.log('username is ' + username);
  

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    const data = await response.json();
    // console.log(data);
    
    // Transform the data into a flat array of contributions
    const contributions = data.data.user.contributionsCollection.contributionCalendar.weeks
      .flatMap(week => week.contributionDays)
      .map(day => ({
        date: day.date,
        count: day.contributionCount
      }));

    return NextResponse.json(contributions);
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 500 });
  }
}