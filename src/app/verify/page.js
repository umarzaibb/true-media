"use client";

import axios from "axios";
import styles from "./verify.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Verify() {

  const router=useRouter();

  useEffect(() => {
    const inputs = document.querySelectorAll(`.${styles["code-inputs"]} input`);
    inputs.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        const value = e.target.value;

        if (value.length === 1 && /[0-9]/.test(value)) {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });
  }, []);

  function onSubmit() {

  const inputs = document.querySelectorAll(`.${styles["code-inputs"]} input`);
  let code = "";
  inputs.forEach(input => {
    code += input.value;
  });
  axios.post('http://localhost:3000/api/user/verify', {email: localStorage.getItem('email'), emailToken: Number(code)})
  .then((res)=>{
    if(res.status==201) {
      router.push('/login');
    }
  }).catch((e)=>{
      alert('Wrong email token');
      router.push('/signup');
  });
  }



  return (
    <main className={styles["verify-page"]}>
      <div className={styles["verify-container"]}>
        <div className={styles["verify-card"]}>
          <div className={styles["brand-badge"]}>
            <span>T</span>
          </div>

          <div className={styles["verify-content"]}>
            <h1>Verify your email</h1>
            <p className={styles["verify-subtitle"]}>
              We've sent a verification code to your email address. Enter it below to complete your signup.
            </p>

            <div className={styles["verify-form"]}>
              <div className={styles["code-inputs"]}>
                <input type="text" maxLength="1" placeholder="0"/>
                <input type="text" maxLength="1" placeholder="0" />
                <input type="text" maxLength="1" placeholder="0" />
                <input type="text" maxLength="1" placeholder="0" />
                <input type="text" maxLength="1" placeholder="0" />
                <input type="text" maxLength="1" placeholder="0" />
              </div>

              <button onClick={onSubmit} className={styles["verify-btn"]}>
                Verify code
              </button>
            </div>

            <div className={styles["verify-footer"]}>
              <p>Didn't receive the code? <a href="/signup">Resend code</a></p>
              <p className={styles["timer"]}>Resend in <span>5:00</span></p>
            </div>

            <div className={styles["verify-help"]}>
              <a href="/login">Back to login</a>
            </div>
          </div>
        </div>

        <div className={styles["verify-visual"]}>
          <div className={styles["visual-card"]}>
            <div className={styles["icon"]}>✓</div>
            <h2>Secure verification</h2>
            <p>Your account and data are protected with industry-standard encryption.</p>
            <div className={styles["features"]}>
              <div className={styles["feature"]}>
                <span>🔒</span>
                <p>Email verified</p>
              </div>
              <div className={styles["feature"]}>
                <span>⚡</span>
                <p>Instant access</p>
              </div>
              <div className={styles["feature"]}>
                <span>🌟</span>
                <p>Full features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
