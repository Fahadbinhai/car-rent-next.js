'use client'
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const TanstackQuery = ({ children }) => {

    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default TanstackQuery;


// ei khane tanstack query er jonno jeno main layout ta ke client side rendaring kora na lage se jonno tanstack query er jonno ekta custom hook banailam . then main layout e eita diye warp kore disi jate tanstack query ta ke access kora jay . 