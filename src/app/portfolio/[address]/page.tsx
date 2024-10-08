import PortfolioClientComponent from '@/components/portfolio/Portfolio';
import prisma from '@/lib/primsa'; // Ensure the correct path

export default async function PortfolioPage({ params }: { params: { address: string } }) {
  const { address } = params;

  // Fetch the user data server-side
  const user = await prisma.user.findUnique({
    where: { accountAddress: address },
    include: {
      userInfo: true,
      songs: true,
    },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  return (

    <div className='w-full h-screen bg-zinc-900'>
    <div className='w-full h-[35%] bg-zinc-800 hover:bg-zinc-700 flex justify-center items-center'>
      <div className='text-white opacity-70'></div>
    </div>
    <PortfolioClientComponent user={user} />
</div>

  );
}