// src/design-system/atomic/atoms/Button/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders children correctly', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  test('applies default classes', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button', 'primary', 'medium');
  });

  test('applies variant classes correctly', () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('secondary');
  });

  test('applies size classes correctly', () => {
    render(<Button size="large">Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('large');
  });

  test('applies fullWidth class when isFullWidth is true', () => {
    render(<Button isFullWidth>Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('fullWidth');
  });

  test('passes native button props', () => {
    render(<Button type="submit" data-testid="test-button">Test</Button>);
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('handles disabled state correctly', () => {
    render(<Button disabled>Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    // El botón disabled no tiene clase 'disabled' en la nueva implementación
  });

  test('handles loading state correctly', () => {
    render(<Button isLoading>Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('loading');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
