import React, { createContext, useContext, useState } from 'react';

export type Country = 'EUA' | 'Canada' | 'Portugal' | 'Irlanda';

type OnboardingState = {
  country: Country | null;
  english: 'nenhum' | 'basico' | 'intermediario' | 'avancado' | null;
  age: number | null;
  education: string | null;
  profession: string | null;
  income: number | null;
};

type OnboardingContextType = {
  state: OnboardingState;
  setState: (s: Partial<OnboardingState>) => void;
};

const OnboardingContext = createContext<OnboardingContextType>({} as OnboardingContextType);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setStateInner] = useState<OnboardingState>({
    country: null,
    english: null,
    age: null,
    education: null,
    profession: null,
    income: null,
  });

  const setState = (partial: Partial<OnboardingState>) =>
    setStateInner(prev => ({ ...prev, ...partial }));

  return (
    <OnboardingContext.Provider value={{ state, setState }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);
