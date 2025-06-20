
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-primary">Counter</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="relative">
          <div className="text-6xl font-bold text-primary transition-all duration-300 hover:scale-110">
            {count}
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            Current Count
          </div>
        </div>
        <Button 
          onClick={handleIncrement}
          size="lg"
          className="w-full font-semibold transition-all duration-200 hover:scale-105"
        >
          Increment Counter
        </Button>
      </CardContent>
    </Card>
  );
};

export default Counter;
