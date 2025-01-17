import MemberCard from '@/components/common/Cards/Member'
import { members } from '@/constant/members'

const Members = () => {
  return (
    <section
      className="relative flex items-center justify-center px-36 h-screen border-t-4 border-t-blue-500"
      id="anggota"
    >
      {members.map((item, key) => (
        <div key={key}>
          <MemberCard data={item} />
        </div>
      ))}
    </section>
  )
}

export default Members
