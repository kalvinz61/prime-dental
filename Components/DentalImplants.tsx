import Link from 'next/link';
export default function () {
  return (
    <>
      <div className="description">
        <h3>The perfect impplant.</h3>
        <div>
          Dental implants transcend the capabilities of dentures, bridgework and
          other replacement teeth. Implants have unparalled longevity—they can
          last for a lifetime—and may be used to replace anywhere from a single
          tooth to several teeth.
        </div>
        <Link href="/turnaround">RX AND TURNAROUND TIMES</Link>
      </div>

      <div>
        <div>Implant Screw Brands</div>
        <ul>
          <li>Zimmer</li>
          <li>Nobel Active</li>
          <li>Osstem</li>
          <li>Sweden and Martina</li>
          <li>3i</li>
          <li>Hiossen</li>
          <li>and much more</li>
        </ul>
      </div>

      <div>
        <h3>Types</h3>
        <div>
          Family Implant supported dentures Implant supported bridges Implant
          supported crownes Implant bars
        </div>
      </div>

      <hr />

      <div className="reviews">
        <h3>Reviews</h3>
        <div>
          <h3>Thank you for making my life easier!</h3>
          <div>
            “Thank you for making my life easier! I learned you made a few
            implants through Dr X and I just wanted to convey my thanks to
            Prime.” — J.S.
          </div>
        </div>
        <div>
          <h3>Prime deserves high praise.</h3>
          <div>
            “Great job! Implant fits well, Prime deserves high praise.” — Dr
            M.B.
          </div>
        </div>
        <h3>Can last a lifetime.*</h3>
        <div>
          “If properly maintained and cared for, implants have the potential to
          last a lifetime.” — Daniel Lee, CDT MDT *Not a warranty. Porcelain may
          break due to external factors. Prime Dental Implant Tech is not
          responsible for damages caused by improper care and/or maintenance.
        </div>
      </div>
    </>
  );
}
