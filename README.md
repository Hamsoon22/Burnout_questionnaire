# Burnout_questionnaire

import React, { useState } from "react";

export default function MBIGSMobileFriendly() {
  const [score, setScore] = useState(null);

  const handleSubmit = () => {
    let total = 0;
    for (let i = 0; i < 16; i++) {
      const selected = document.querySelector(`input[name='q${i}']:checked`);
      if (selected) {
        total += parseInt(selected.value, 10);
      }
    }
    setScore(total);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 font-sans text-gray-800">
      <main className="space-y-6">
        <section className="bg-gray-100 rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">📋 설문지</h2>
          <p className="text-sm mb-4">다음 질문에 0에서 6 사이의 점수로 답해주세요.<br />(0: 전혀없다, 1: 1년에 2-3회 또는 그 미만, 2: 한 달에 한 번 또는 그 미만, 3: 한 달에 2-3회, 4: 일주일에 1회 정도, 5: 일주일에 2-3회, 6: 매일)</p>
          <div className="overflow-auto">
            <table className="min-w-full text-xs border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-2 py-1">#</th>
                  <th className="border px-2 py-1 text-left">질문지</th>
                  {[...Array(7).keys()].map(i => (
                    <th key={i} className="border px-1">{i}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  "맡은 일을 하는데 있어서 정서적으로 지쳐있음을 느낀다.",
                  "직장 일을 마치고 퇴근할 때 완전히 지쳐있음을 느낀다.",
                  "아침에 일어나서 출근할 생각만 하면 피곤함을 느낀다.",
                  "하루 종일 일하는 것은 나를 긴장 시킨다.",
                  "나는 직무상 발생하는 문제들을 효과적으로 해결할 수 있다.",
                  "맡은 일을 수행하는데 있어서 완전히 지쳐있다.",
                  "현재 소속된 직장에 효과적인 기여를 하고 있다고 느낀다.",
                  "현재의 업무를 시작한 이후로 내 일에 대한 관심이 줄었다.",
                  "맡은 일을 하는데 있어서 소극적이 되었다.",
                  "내가 생각할 때, 나는 일을 잘 한다.",
                  "직무상 무언가를 성취했을 때 기쁨을 느낀다.",
                  "나는 현재의 직무에서 가치 있는 많은 것을 이루어왔다.",
                  "나는 방해받지 않고 내 일을 수행하기 원할 뿐이다.",
                  "내 업무가 무언가에 기여하든 말든 나는 점점 더 냉소적이 되었다.",
                  "내 직무의 중요성이 의심스럽다.",
                  "직무상, 나는 일을 효과적으로 처리하고 있다는 자신감이 있다."
                ].map((q, idx) => (
                  <tr key={idx} className="even:bg-gray-50">
                    <td className="border px-2 py-1 text-center">{idx + 1}</td>
                    <td className="border px-2 py-1">{q}</td>
                    {[...Array(7).keys()].map(i => (
                      <td key={i} className="border px-1 py-1 text-center">
                        <input type="radio" name={`q${idx}`} value={i} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4">
            <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded-md">결과 보기</button>
            {score !== null && (
              <p className="mt-2 text-sm">총점: <span className="font-semibold">{score}</span>점</p>
            )}
          </div>
        </section>
      </main>

      <footer className="text-center mt-10 text-xs text-gray-500">
        &copy; 2025 MBIGS Lab. All rights reserved.
      </footer>
    </div>
  );
}
