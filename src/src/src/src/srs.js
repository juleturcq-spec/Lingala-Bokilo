export function nextReview(prev, grade){
  const now = Date.now();

  const p = prev ?? {
    interval: 0,
    ease: 2.5,
    reps: 0,
    due: now
  };

  let ease = p.ease;
  ease = Math.max(1.3, ease + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));

  let reps = p.reps;
  let interval = p.interval;

  if (grade < 3){
    reps = 0;
    interval = 1;
  } else {
    reps += 1;

    if (reps === 1) interval = 1;
    else if (reps === 2) interval = 3;
    else interval = Math.round(interval * ease);
  }

  const due = now + interval * 24 * 60 * 60 * 1000;

  return {
    interval,
    ease,
    reps,
    due
  };
}

export function dueNow(srsMap){
  const now = Date.now();

  return Object.entries(srsMap || {})
    .filter(([,v]) => (v?.due ?? 0) <= now)
    .map(([id]) => id);
}
