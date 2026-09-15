import Image from "next/image"
import Link from "next/link"

const cards = [
  {
    image: "/images/4781810_coin_currency_dollar_finance_money_icon 1.png",
    header: "View Balance Due",
    para: "This is a monthly payment fir your app usage. Your subcriptions give you optimal benefits and flexibility.",
    link: "/dashboard/balance"
  },
  {
    image: "/images/2560046_friends_media_network_social_icon 1.png",
    header: "My Visitors",
    para: "Have the ability to invite your friends, loved oes and family without any delay or worries.",
    link: "/dashboard/add-visitor"
  },
  {
    image: "/images/352584_payment_icon 1.png",
    header: "Payment",
    para: "All payments made and history are viewed and made for here. There are different methods to pay or subscribe.",
    link: "/dashboard/payment"
  }
]

const page = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full pt-25 pr-10 pb-25 pl-10 gap-10">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col items-start justify-center w-full gap-5 shadow-[0_4px_6px_rgba(0,0,0,0.1)] bg-white p-5">
          <div className="flex items-center justify-center gap-5">
            <Image src={card.image} alt={card.header} width={30} height={30}/>
            <h1 className="text-black text-[16px] font-bold">{card.header}</h1>
          </div>
          <p className="text-black text-[12px] font-normal">{card.para}</p>
          {card.link && (
            <Link href={card.link} className="text-[#EE7421] hover:underline">
              Click here
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

export default page