"use client"

import { Button } from "@radix-ui/themes"
import { useState } from "react"

// type Props = {
//   type: string
// }

function update(post: boolean) {
  let mainForm = document.getElementById("mainForm") as HTMLSelectElement
  let thanks = document.getElementById("thanks") as HTMLSelectElement
  let l = document.getElementById("length") as HTMLSelectElement
  let w = document.getElementById("width") as HTMLSelectElement
  let sd = document.getElementById("singledouble") as HTMLSelectElement
  let sdv = 1
  if (sd.value === "double") {
    sdv = 2
  }
  let d = Number(w.value) * Number(l.value) * Number(sdv)
  let ppm = 25
  let adjust = 1.1
  let t = Number(d * ppm)
  let t_adjust = Number(t * adjust) as unknown as string
  console.log("length", l.value)
  console.log("Width", w.value)
  console.log("d", d)
  console.log("t", t)
  let totalContainer = document.querySelector(".total-container")
  if (!totalContainer) {
    return
  }
  let total = totalContainer.querySelector(".total") as HTMLElement
  if (!total) {
    return
  }
  // format number to British pounds
  let pounds = Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumSignificantDigits: 2,
  })
  total.innerHTML = pounds.format(Number(t_adjust))
  if (post === true) {
    mainForm.hidden = true
    thanks.hidden = false
  }
}

// export function Quote({ type }: Props) {
export function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    width: "",
    length: "",
    singledouble: "",
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    update(false)
  }

  async function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault()
    console.log("FormData", formData)
    try {
      // await fetch("/api/basic-email", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ formData }),
      // })
      update(true)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div
      id="quote-container"
      className="quote-container mt-6 w-full max-w-screen-xl border-t pb-4 pt-6 text-white md:pb-0"
    >
      <form id="quoteForm" onSubmit={sendEmail}>
        <div id="mainForm" className="grid grid-cols-12 items-center gap-4 md:gap-6">
          <div className="col-span-12">
            <p className="text-white lg:text-base">
              Please select from the options below to get a rough quote using our calculator tool.
            </p>
            <p className="text-white lg:text-base">
              You can add your details to get your quote emailed to you and one of our representatives will be in touch!
            </p>
          </div>
          <div className="col-span-6 text-left md:col-span-3">
            <label htmlFor="length">Length (metres)</label>
            <select id="length" name="length" onChange={handleChange} className="r-10 bg-slate-200 text-black">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
          <div className="col-span-6 text-left md:col-span-3">
            <label htmlFor="width">Width (metres)</label>
            <select onChange={handleChange} name="width" id="width" className="r-10 bg-slate-200 text-black">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
          <div className="col-span-12 text-left sm:col-span-6 md:col-span-3">
            <label htmlFor="singledouble">Single or Double Storey</label>
            <select
              onChange={handleChange}
              name="singledouble"
              id="singledouble"
              className="r-10 bg-slate-200 text-black"
            >
              <option value="single">single</option>
              <option value="double">double</option>
            </select>
          </div>
          <div className="col-span-12 text-center sm:col-span-6 md:col-span-3">
            <p className="total-container pt-4 text-xl font-semibold">
              Total: <span className="total">£0</span>
            </p>
          </div>
          <div className="col-span-6 text-left md:col-span-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name..."
              value={formData.name}
              onChange={handleChange}
              className="text-black"
              required
            />
          </div>
          <div className="col-span-6 text-left md:col-span-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address..."
              value={formData.email}
              onChange={handleChange}
              className="text-black"
              required
            />
          </div>
          <div className="col-span-6 text-left md:col-span-3">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number..."
              value={formData.phone}
              onChange={handleChange}
              className="text-black"
              required
            />
          </div>
          <div className="col-span-6 text-left md:col-span-3">
            <label htmlFor="postcode">Postcode</label>
            <input
              type="text"
              name="postcode"
              placeholder="Enter postcode..."
              value={formData.postcode}
              onChange={handleChange}
              className="text-black"
              required
            />
          </div>
          <div className="col-span-12 text-center">
            <Button color="green" size="4" className="mt-4 w-full p-6 md:w-auto lg:mb-4">
              Continue and Get your Quote!
            </Button>
          </div>
        </div>
        <div id="thanks" className="mt-2 flex items-center" hidden>
          <p className="text-xl font-medium md:text-3xl">
            Thanks for getting in touch. One of our sales representatives will contact you to discuss things further!
          </p>
        </div>
      </form>
    </div>
  )
}

export default Quote
