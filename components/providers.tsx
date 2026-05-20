import type { ReactNode } from 'react';

import { AppConvexProvider } from '@/lib/convex/convex-provider';
import { HydrateClient, caller } from '@/lib/convex/rsc';

export async function Providers({ children }: { children: ReactNode }) {
  const token = await caller.getToken();

  return (
    <AppConvexProvider token={token}>
      <HydrateClient>{children}</HydrateClient>
    </AppConvexProvider>
  );
}
